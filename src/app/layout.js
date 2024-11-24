import '../../public/css/bootstrap.css';
import '../../public/css/animate.css';
import '../../public/css/swiper-bundle.css';
import '../../public/css/slick.css';
import '../../public/css/magnific-popup.css';
// import '../../public/css/font-awesome-pro.css';
import '../../public/css/flaticon_tecz.css';
import '../../public/css/spacing.css';
import '../../public/css/main.css';

import Navbar from "src/components/navbar"; // Using alias if you've set it up, or keep the relative path if not
import Footer from "src/components/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
