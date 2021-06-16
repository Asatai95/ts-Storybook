interface OwnProps {
    src: any,
    alt: string
}

export const Image = (props: OwnProps) => {
    const { src, alt } = props;
    return(
        <img src={src} alt={alt} />
    );
}
