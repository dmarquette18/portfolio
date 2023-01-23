import { PhotoAlbum } from "react-photo-album";

const photoGalleryApp = (props) => {
    return(
        <PhotoAlbum layout="rows" photos={props.photos}/>
    )
}

export default photoGalleryApp;