import Navbar from "./Navbar";

// Lo stile globale si applica anche a tutti i child

const Layout: React.FunctionComponent = props => (
    <div>
        <Navbar/>
        {props.children}
        <style jsx global>{`
            * {
                font-family: Calibri, sans-serif;
            }
        `}</style>
    </div>
);

export default Layout;