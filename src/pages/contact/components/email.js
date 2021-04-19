import React, { Fragment } from "react";
import mydata from "@mydata";

class ContactEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      subject: "",
      body: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  componentDidMount() {
    this.setState({
      email: mydata["profile"]["aboutme"]["email"],
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  sendEmail(event) {
    const { email, subject, body } = this.state;
    window.location.href =
      "mailto:" + email + "?subject=" + subject + "&body=" + body;
    return null;
  }

  render() {
    const { email, subject, body } = this.state;
    return (
      <Fragment>
        <section className="section is-small">
          <h1 className="title is-size-5-touch is-size-4-desktop">Email Me</h1>
        </section>
        <form onSubmit={this.sendEmail}>
          <div className="field">
            <label className="label is-large has-text-left">To</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input is-primary"
                type="email"
                name="email"
                value={email}
                readOnly
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label is-large has-text-left">Subject</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label is-large has-text-left">Message</label>
            <div className="control">
              <textarea
                className="textarea has-fixed-size"
                name="body"
                placeholder="Message"
                value={body}
                onChange={this.handleInputChange}
                rows="6"
              ></textarea>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button
                className="button is-link  is-fullwidth"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}
export default ContactEmail;
