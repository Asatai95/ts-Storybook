import './button.css';

interface OwnProps {
    primary: boolean,
    label: string,
    size: string,
    backgroundColor: string,
}

export const Button = (props: OwnProps) => {
    const { primary, label, size, backgroundColor } = props;
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary'

    return(
        <button
            type="button"
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
}
