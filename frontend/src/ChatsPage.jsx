// This is a pre built library and therefore the style cannot be changed. Only the app CSS can be changed. 
import { PrettyChatWindow } from "react-chat-engine-pretty" //The PrettyChatWindow and its components are imported from react-chat-engine-pretty.
const ChatsPage = (props) => { //The ChatsPage components are defined. 
    return (
        // The container are created with a 100vh height for chat window.
        <div style={{ height: "100vh" }}>
            <PrettyChatWindow
            projectId="2461b6aa-e31f-49e7-b564-fde62da4ae36" // The project ID are specified 
            username={props.user.username}  // The username are send from the props
            secret={props.user.username} // The username are send as a secret
            style={{ height: "100%"}} // The style height is set 100% of the container. 
            />
        </div>
    )
}
// The Chatspage component is exported to be used in other parts of the program. 
export default ChatsPage