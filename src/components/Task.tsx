import React from 'react';
import { Box, TextField, Checkbox, Typography, Link } from '@material-ui/core';

export type TTask = {
    id: string,
    title: string,
    state: string
}

interface OwnProps {
    task: TTask,
    onArchiveTask:(id: string) => void | undefined,
    onPinTask:(id: string) => void | undefined
}

export const Task: React.FC<OwnProps> = (props) => {
    const { task, onArchiveTask, onPinTask } = props;
    return (
        <Box className={`list-item ${task.state}`}>
            <label className='checkbox'>
                <Checkbox
                    defaultChecked={task.state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                />
                <span className="checkbox-custom" onClick={() => onArchiveTask(task.id)} />
            </label>
            <Box className="title">
                <TextField id="standard-basic" label="Standard" value={task.title} />
            </Box>
            <Box className="actions" onClick={(e: any) => e.stopPropagation()}>
                {task.state !== 'TASK_ARCHIVED' && (
                    <Link onClick={() => onPinTask(task.id)}>
                        <span className= "icon-star" />
                    </Link>
                )}
            </Box>
        </Box>
    );
}