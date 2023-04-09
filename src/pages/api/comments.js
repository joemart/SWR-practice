import {comments} from "../components/swr/mutation&revalidate/data"


export default (req,res) =>{
    switch (req.method){
        case "GET":
            res.status(200).json({data:comments})
            break
        case "POST":
            const myData = req.body.comment
            comments.push({data:myData})
            res.status(200).json({data:myData})
            break
        default:
            res.status(400).json({data:"ERROR"})
    }
}