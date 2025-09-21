type ButtonProps = {
    text: string;
    className?: string;
    id?: string;
};

export const Button = ({ text, className, id }: ButtonProps) => {
    return (
        <a href="" className={`${className ?? ""}`}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </a>
    );
};
