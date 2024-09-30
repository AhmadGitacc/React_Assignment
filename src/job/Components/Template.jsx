import Footer from "./Footer";
import Header from "./Header";

const Template = (props) => {
    return (
        <div>
            <Header />

            {/* childs */}
            {props.children}

            <Footer />
        </div>
    );
}

export default Template;