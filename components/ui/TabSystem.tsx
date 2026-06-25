interface TabItem {
  id: string
  label: string
}

interface TabSystemProps {
  tabs: TabItem[]
  value: string
  onChange: (value: string) => void
}

export function TabSystem({ tabs, value, onChange }: TabSystemProps) {
  return (
    <div role="tablist" aria-label="Kategori program Sikola Indonesia" className="inline-flex rounded-full border border-border bg-white p-1 shadow-sm">
      {tabs.map((tab) => {
        const active = tab.id === value
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active}
            aria-label={`Tampilkan ${tab.label} Sikola Indonesia`}
            onClick={() => onChange(tab.id)}
            className={`brand-focus rounded-full px-4 py-2 text-sm font-semibold transition-all ${
              active ? 'bg-brand-gradient text-white shadow-md' : 'text-muted hover:text-text'
            }`}
          >
            {tab.label}
          </button>
        )
      })}
    </div>
  )
}
