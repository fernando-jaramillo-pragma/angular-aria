import { Grid, GridCell, GridCellWidget, GridRow } from '@angular/aria/grid';
import { Toolbar, ToolbarWidget, ToolbarWidgetGroup } from '@angular/aria/toolbar';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type HelpTool = 'faq' | 'docs' | 'ticket';

interface HelpGridCell {
  id: number;
  title: string;
  code: 'PEND' | 'FAQ' | 'DOCS' | 'TICKET';
}

@Component({
  selector: 'app-ayuda-workspace',
  imports: [Toolbar, ToolbarWidget, ToolbarWidgetGroup, Grid, GridRow, GridCell, GridCellWidget],
  templateUrl: './ayuda-workspace.html',
  styleUrl: './ayuda-workspace.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AyudaWorkspaceComponent {
  readonly toolbarValues = signal<string[]>(['faq']);
  readonly activeTool = signal<HelpTool>('faq');
  readonly gridData = signal<HelpGridCell[][]>(this.createInitialGrid());

  selectTool(tool: HelpTool) {
    this.activeTool.set(tool);
    this.toolbarValues.set([tool]);
  }

  onToolbarValuesChange(values: string[]) {
    if (values.length === 0) {
      this.toolbarValues.set([this.activeTool()]);
      return;
    }

    const tool = values[values.length - 1] as HelpTool;
    this.selectTool(tool);
  }

  applyTool(cellId: number) {
    const tool = this.activeTool();
    const payload = this.getPayloadForTool(tool);

    this.gridData.update((rows) =>
      rows.map((row) =>
        row.map((cell) =>
          cell.id === cellId ? { ...cell, title: payload.title, code: payload.code } : cell,
        ),
      ),
    );
  }

  clearGrid() {
    this.gridData.set(this.createInitialGrid());
  }

  private createInitialGrid(): HelpGridCell[][] {
    let id = 1;

    return Array.from({ length: 3 }, (_, rowIndex) =>
      Array.from({ length: 3 }, (_, colIndex) => ({
        id: id++,
        title: `Bloque ${rowIndex + 1}-${colIndex + 1}`,
        code: 'PEND',
      })),
    );
  }

  private getPayloadForTool(tool: HelpTool): Pick<HelpGridCell, 'title' | 'code'> {
    if (tool === 'faq') {
      return { title: 'Respuesta FAQ', code: 'FAQ' };
    }

    if (tool === 'docs') {
      return { title: 'Referencia Docs', code: 'DOCS' };
    }

    return { title: 'Ticket Soporte', code: 'TICKET' };
  }
}
