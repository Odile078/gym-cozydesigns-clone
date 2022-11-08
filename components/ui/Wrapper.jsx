const Wrapper = ({hero,children}) => {
    return (
        <div className={(hero?" wrapper--hero ":" ")+"wrapper flex items-center justify-center flex-row"}>
            {children}
        </div>
    );
}

export default Wrapper;