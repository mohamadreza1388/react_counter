import {Component} from "react";

export class Counter extends Component {
    state = {
        // eslint-disable-next-line react/prop-types
        count: this.props.start
    }

    // eslint-disable-next-line react/prop-types
    step = this.props.step

    add = () => {
        this.setState({count: this.state.count + this.step});
    }

    minus = () => {
        this.setState({count: this.state.count - this.step});
    }

    status = () => {
        return this.state.count === 0 ?
            <div className={"status w-full h-[5px] absolute top-0 right-0 bg-green-500"}></div> : this.state.count > 0 ?
                <div className={"status w-full h-[5px] absolute top-0 right-0 bg-red-500"}></div> :
                <div className={"status w-full h-[5px] absolute top-0 right-0 bg-blue-500"}></div>
    }

    render() {
        return (<>
            <div className="container mx-auto py-5 my-3">
                <div
                    className={"p-[15px] rounded-[20px] bg-gray-50 border relative overflow-hidden flex justify-between items-center px-5"}>
                    {this.status()}
                    <div className={"text-[20px]"}>تعداد : <span className={"font-bold"}>{this.state.count}</span></div>
                    <div className={"flex flex-col gap-2"}>
                        <button className={"rounded-[10px] bg-green-500 text-white p-[10px] border-0"}
                                onClick={() => this.add()}>افزایش
                        </button>
                        <button className={"rounded-[10px] bg-red-500 text-white p-[10px] border-0"}
                                onClick={() => this.minus()}>کاهش
                        </button>
                    </div>
                </div>
            </div>
        </>)
    }
}