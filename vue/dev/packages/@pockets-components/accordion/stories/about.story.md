---
route: 'pockets vue/components/accordion/about'
title: 'About'
---

## Pockets Accordion
### ```pockets-accordion```

This component consists of four main elements:

1. **pockets-accordion**: The container for the entire accordion.
2. **pockets-accordion-item**: Each individual section within the accordion.
3. **pockets-accordion-trigger**: The button or header that triggers the expansion or collapse of the content.
4. **pockets-accordion-content**: The content area that is shown or hidden.

All elements share the same set of properties, and configuration for `item/trigger/content` components can be applied to any of them. These configurations are automatically inherited by their children. For example you can apply options to the ```pockets-accordion``` and all 
```item/trigger/content``` elements will inherit those options. You could then apply different options on the ```item``` element and the ```trigger/content``` elements inside it would inherit those options.

### Setting Accordion Options

Setting Options is primarily done on the `pockets-accordion` component. The component
starts with default values for each option. You can override the default options on any child accordion components. Any overrides applied will flow downwards, applying to all nested children of the component containing overriden options.