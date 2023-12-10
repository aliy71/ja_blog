interface IBlogData {
    label: string,
    description: string,
    image: IMedia
}

interface IMedia {
    src: string,
    alt: string
}

const BlogData: IBlogData[] = [
    {
        label: 'Hayotiy',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et odit, fugit voluptas rem recusandae adipisci quasi dolorem dicta numquam libero iure ullam deleniti hic similique, temporibus repellendus cupiditate quo. Distinctio.`,
        image: {
            src: 'https://imgs.search.brave.com/yEfrvvRy7q0vLlxVCVIyWsg1rf2tpdxp6dcAOl5qyMM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/Ny8xOS8xMC8wMC9z/Y2hvb2wtd29yay04/NTEzMjhfNjQwLmpw/Zw',
            alt: ''
        }
    },
    {
        label: 'Texnologik',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et odit, fugit voluptas rem recusandae adipisci quasi dolorem dicta numquam libero iure ullam deleniti hic similique, temporibus repellendus cupiditate quo. Distinctio.`,
        image: {
            src: 'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: ''
        }
    },
    {
        label: 'Bizzness',
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et odit, fugit voluptas rem recusandae adipisci quasi dolorem dicta numquam libero iure ullam deleniti hic similique, temporibus repellendus cupiditate quo. Distinctio.`,
        image: {
            src: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: ''
        }
    },
]

export default BlogData