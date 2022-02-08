import { Component } from "react";
import styled from "styled-components";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  font-family: Apercu Arabic Pro;
  line-height: 130%;
`;
const Input = styled.input`
  width: 557px;
  height: 93px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 18px;
  font-family: Apercu Arabic Pro;
  padding: 0 45px;
  line-height: 180%;
`;
const MessageInput = styled.textarea`
  font-size: 18px;
  line-height: 180%;
  padding: 30px 45px;
  width: 557px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px;
  min-height: 189px;
  resize: none;
  font-family: Apercu Arabic Pro;
`;
const Button = styled.button`
  border: 0;
  width: 218px;
  height: 73px;
  background: #fad34f;
  border-radius: 500px;
  font-size: 18px;
  color: #ffffff;
  transition: all 700ms;
  &:hover,
  &:focus {
    color: #fad34f;
    background: #ffffff;
    border: 1px solid #fad34f;
  }
`;
class App extends Component {
  state = { ...INITIAL_STATE, status: false };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(` name: ${this.state.name}
  email:  ${this.state.email}
  message:  ${this.state.message}`);
    this.setState({ ...INITIAL_STATE, status: !this.state.status });
  };
  buttonHandler = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <>
        <Title>Reach out to us!</Title>

        {this.state.status ? (
          <div>
            <p>We have contacted you soon!</p>
            <Button onClick={this.buttonHandler}>Back</Button>
          </div>
        ) : (
          <form onSubmit={this.onSubmit}>
            <Input
              type="text"
              value={name}
              name="name"
              required
              placeholder="Your name*"
              onChange={this.handleChange}
            />
            <Input
              type="email"
              value={email}
              name="email"
              required
              placeholder="Your e-mail*"
              onChange={this.handleChange}
            />
            <MessageInput
              type="textarea"
              value={message}
              name="message"
              required
              placeholder="Your message*"
              onChange={this.handleChange}
            />
            <Button type="submit">Send message</Button>
          </form>
        )}
      </>
    );
  }
}

export default App;
