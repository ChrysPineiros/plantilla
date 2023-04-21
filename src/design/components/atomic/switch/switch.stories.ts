// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { FormsModule } from '@angular/forms';
//import { Story, Meta } from '@storybook/angular/types-6-0';
import { Story, Meta } from '@storybook/angular';
import { SwitchComponent } from './switch.component';


export default {
  title: 'Atomic/Switch',
  component: SwitchComponent,
  argTypes: {
    textYes: { control: 'text' },
    textNo: { control: 'text' },
    onChange: { action: 'clicked' }
  },
} as Meta;

const Template: Story<SwitchComponent> = (args: SwitchComponent) => ({
  props: args,
  moduleMetadata: {
      imports: [FormsModule]
  }
});

export const Primary = Template.bind({});
Primary.args = {
    defaultChoice: true,
    textYes: 'Yes',
    textNo: 'No',
};

