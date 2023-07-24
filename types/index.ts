export interface getHokimProps {
    id: number,
    images: string,
    f_name: string,
    phone: number
}

export interface getPhotoCaruselProps {
    id: number,
    post_img: string,
    time: number
}

export interface getAllPhotoProps {
    id: number,
    post_img: string,
    total_pages: number
}

export interface getNewsCarouselProps {
    id: number,
    add_time: number,
    post_img: string,
    title: string,
    slug: string
}

export interface getAllNewsProps {
    id: number,
    add_time: number,
    author: number,
    author_news: string,
    html: string,
    post: string,
    post_img: string,
    post_view: number,
    slug: string,
    subtitle: string,
    title: string,
    video_file: string
}

export interface allNewsListProps {
    id: number,
    add_time: number,
    author: number,
    author_news: string,
    html: string,
    post: string,
    post_img: string,
    post_view: number,
    slug: string,
    subtitle: string,
    title: string,
    video_file: string
}

export interface popularNewsProps {
    id: number,
    add_time: number,
    author: number,
    author_news: string,
    html: string,
    post: string,
    post_img: string,
    post_view: number,
    slug: string,
    subtitle: string,
    title: string,
    video_file: string
}

export interface statistikaProps {
    id: number,
    appeals: number,
    canceled: number,
    expertiza: number,
    looking_appeals: number,
    understand: number
}

export interface postDetailProps {
    id: number,
    post_view: any,
    slug: string,
    add_time: number,
    title: string,
    video_file: string,
    post_file: string,
    author_news: string,
    postid: number

}

export interface searchProps {
    id: number,
    slug: string,
    title: string,
    length: number,
}

export interface navbarProps {
    id: number,
    subItem: any,
    name: string,
    slug: string,
    children: any

}

export interface navDetailListProps {
    id:number
}

export interface RahbariyatListprops {
    id:number ,
    admission_days:number,
    phone:number ,
    f_name:string ,
    profession:string,
    post_img:string,
    html_obligations:string,
    html_cv:string,
    key:any,
    item:any
}

export interface MarkaziyAptProps {
    id:number ,
    post_img:string,
    job:string,
    f_name:string,
    phone:number,
    email:any,
    index:number,
    worker:string,
    image:string

}