// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
//import { Story, Meta } from '@storybook/angular/types-6-0';
import { Story, Meta } from '@storybook/angular';
import { CneGridFilterSortingComponent } from './cne-grid-filter-sorting.component';


export default {
  title: 'Atomic/GridFilter',
  component: CneGridFilterSortingComponent,
  argTypes: {
    textYes: { control: 'text' },
    textNo: { control: 'text' },
    onChange: { action: 'clicked' }
  },
} as Meta;

const Template: Story<CneGridFilterSortingComponent> = (args: CneGridFilterSortingComponent) => ({
  props: args,
  moduleMetadata: {
      imports: [FormsModule]
  }
});

export const Primary = Template.bind({});
Primary.args = {
    dataSource: true,
    columns: ['Hola1', 'Hola2']
};

