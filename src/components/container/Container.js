import "./Container.css";

const Container = ({children, width}) => {
    return (
        <div className="container" style={{maxWidth:`${width}px`}}>
            {children}
        </div>
    );
}

export default Container;