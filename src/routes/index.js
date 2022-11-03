import Home from "|/pages/Home";
import Following from "|/pages/Following";
import Upload from "|/pages/Upload";
import HeaderOnly from "|/components/Layouts/HeaderOnly";

export const publicPath = [
    { path: "/", component: Home },
    { path: "/following", component: Following, layout: null },
    { path: "/upload", component: Upload, layout: HeaderOnly },
]