const Wrapper = ({hero,children}) => {
    return (
        <div className={(hero?" wrapper--hero ":" ")+"wrapper "}>
            {children}
        </div>
    );
}

export default Wrapper;