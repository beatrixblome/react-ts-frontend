export default interface IPostListProps {
   posts: { id: String, title: String, subposts: {subtitle: String, text?:String}[]}[];
}