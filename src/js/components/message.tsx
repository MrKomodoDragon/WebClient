import { MessageData } from '../types';

// @ts-ignore
export default class Message extends React.Component {
    data: MessageData;

    constructor(props: MessageData) {
        super(props);
        this.data = props;
    }

    render() {
        return (
            <div class="message" id={this.data.id}>
                <div class="message__content">{this.data.content}</div>
            </div>
        )
    }
}
