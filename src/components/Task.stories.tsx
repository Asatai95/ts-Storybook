import React from 'react';
import { Story } from "@storybook/react";
import { Task } from './Task';

export default {
    component: Task,
    title: 'Task',
};

export type TTask = {
    id: string,
    title: string,
    state: string
}

interface OwnArgs {
    task: TTask,
    onArchiveTask:(id: string) => void | undefined,
    onPinTask:(id: string) => void | undefined
}

const Template: Story<OwnArgs> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
    },
};

// export const Pinned = Template.bind({});
// Pinned.args = {
//     task: {
//         ...Default.args.task,
//         state: 'TASK_PINNED',
//     },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//     task: {
//         ...Default.args.task,
//         state: 'TASK_ARCHIVED',
//     },
// };