import { useMemo } from 'react';

function useCurrencyFormatter(value, locale = 'no-NO', currency = 'NOK') {
  const formattedValue = useMemo(() => {

    if (Number.isNaN(value)) {
      return '';
    }

    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      currencyDisplay: 'code'
    });

    return formatter.format(value);
  }, [value, locale, currency]);

  return formattedValue;
}

export default useCurrencyFormatter;
