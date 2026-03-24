import { OverlayModule } from '@angular/cdk/overlay';
import { Combobox, ComboboxInput, ComboboxPopupContainer } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-productos-selector',
  imports: [Combobox, ComboboxInput, ComboboxPopupContainer, Listbox, Option, OverlayModule],
  templateUrl: './productos-selector.html',
  styleUrl: './productos-selector.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductosSelectorComponent {
  private readonly allProducts = [
    'Suite Core',
    'Automation Kit',
    'Analytics Pro',
    'Workflow Designer',
    'Identity Shield',
    'Customer 360',
    'Fraud Monitor',
    'Data Sync Hub',
    'API Gateway Plus',
    'Insights Studio',
  ];

  readonly query = signal('');
  readonly draftValues = signal<string[]>([]);
  readonly selectedProducts = signal<string[]>([]);

  readonly filteredProducts = computed(() => {
    const term = this.query().trim().toLowerCase();

    if (!term) {
      return this.allProducts;
    }

    return this.allProducts.filter((product) => product.toLowerCase().includes(term));
  });

  readonly selectedDraft = computed(() => this.draftValues()[0] ?? null);

  readonly canAdd = computed(() => {
    const draft = this.selectedDraft();

    return !!draft && !this.selectedProducts().includes(draft);
  });

  onQueryChange(value: string) {
    this.query.set(value);

    if (value.trim().length === 0) {
      this.draftValues.set([]);
      return;
    }

    const selected = this.selectedDraft();

    if (selected && selected.toLowerCase() !== value.trim().toLowerCase()) {
      this.draftValues.set([]);
    }
  }

  onDraftValuesChange(values: string[]) {
    this.draftValues.set(values);
  }

  addSelectedProduct() {
    const draft = this.selectedDraft();

    if (!draft || this.selectedProducts().includes(draft)) {
      return;
    }

    this.selectedProducts.update((current) => [...current, draft]);
    this.query.set('');
    this.draftValues.set([]);
  }
}
