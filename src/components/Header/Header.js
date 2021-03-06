const Header = (props) => {
    const {count, setCount} = props;
    return (
        <div>
            <h1>This is a header: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Header;