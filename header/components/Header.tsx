export function Header() {
    return (
        <header
            style={{
                backgroundColor: "white",
                color: "black",
                height: "80px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            Logo
            <ul>
                <li>Home</li>
            </ul>
        </header>
    );
}