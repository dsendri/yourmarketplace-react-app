import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing at all
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div id="wrapper">
        <nav className="navbar navbar-dark bg-inverse navbar-fixed-top">
          <div className="navbar-header">
            <button className="navbar-toggler hidden-sm-up pull-sm-right" type="button" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              &#9776;
                </button>
            <a className="navbar-brand" href="index.html">SB Admin BS 4</a>
          </div>
          <ul className="nav navbar-nav top-nav navbar-right pull-xs-right">
            <li className="dropdown nav-item active">
                      <a className="nav-link dropdown-toggle" href="javascript:;" id="dropdownMenu4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-envelope"></i> <b className="caret"></b><span className="sr-only">(current)</span></a>
                <ul className="dropdown-menu message-dropdown">
                  <li className="dropdown-item message-preview">
                    <a href="javascript:;">
                      <div className="media">
                        <span className="media-left"><img className="media-object" src="http://placehold.it/50x50" alt=""></img></span>
                          <div className="media-body">
                            <h5 className="media-heading"><strong>John Smith</strong>
                            </h5>
                            <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                            <p>Lorem ipsum dolor sit amet, consectetur...</p>
                          </div>
                                    </div>
                                </a>
                            </li>
                    <li className="dropdown-item message-preview">
                      <a href="javascript:;">
                        <div className="media">
                      <span className="media-left"><img className="media-object" src="http://placehold.it/50x50" alt=""></img></span>
                            <div className="media-body">
                              <h5 className="media-heading"><strong>John Smith</strong>
                              </h5>
                              <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                              <p>Lorem ipsum dolor sit amet, consectetur...</p>
                            </div>
                                    </div>
                                </a>
                            </li>
                      <li className="dropdown-item message-preview">
                        <a href="javascript:;">
                          <div className="media">
                      <span className="media-left"><img className="media-object" src="http://placehold.it/50x50" alt=""></img></span>
                              <div className="media-body">
                                <h5 className="media-heading"><strong>John Smith</strong>
                                </h5>
                                <p className="small text-muted"><i className="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                              </div>
                                    </div>
                                </a>
                            </li>
                        <li className="dropdown-item message-footer">
                          <a href="javascript:;">Read All New Messages</a>
                        </li>
                        </ul>
                </li>
                  <li className="dropdown nav-item">
                        <a href="javascript:;" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bell"></i> <b className="caret"></b><span className="sr-only">(current)</span></a>
                      <ul className="dropdown-menu alert-dropdown">
                        <li className="dropdown-item">
                          <a href="javascript:;">Alert Name <span className="label label-default"> Alert Badge</span></a>
                        </li>
                        <li className="dropdown-item">
                          <a href="javascript:;">Alert Name <span className="label label-primary"> Alert Badge</span></a>
                        </li>
                        <li className="dropdown-item">
                          <a href="javascript:;">Alert Name <span className="label label-success">Alert Badge</span></a>
                        </li>
                        <li className="dropdown-item">
                          <a href="javascript:;">Alert Name <span className="label label-info"> Alert Badge</span></a>
                        </li>
                        <li className="dropdown-item">
                          <a href="javascript:;">Alert Name <span className="label label-warning"> Alert Badge</span></a>
                        </li>
                        <li className="dropdown-item">
                          <a href="javascript:;">Alert Name <span className="label label-danger"> Alert Badge</span></a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li className="dropdown-item">
                          <a href="javascript:;">View All</a>
                        </li>
                      </ul>
                </li>
                  <li className="dropdown nav-item">
                    <a href="javascript:;" className="nav-link dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> John Smith <b className="caret"></b></a>
                    <ul className="dropdown-menu">
                      <li className="dropdown-item">
                        <a href="javascript:;"><i className="fa fa-fw fa-user"></i> Profile</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="javascript:;"><i className="fa fa-fw fa-envelope"></i> Inbox</a>
                      </li>
                      <li className="dropdown-item">
                        <a href="javascript:;"><i className="fa fa-fw fa-gear"></i> Settings</a>
                      </li>
                      <li className="divider"></li>
                      <li className="dropdown-item">
                        <a href="javascript:;"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                      </li>
                    </ul>
                  </li>
                </ul>

          <div className="collapse navbar-collapse navbar-toggleable-sm navbar-ex1-collapse">
            <ul className="nav navbar-nav side-nav list-group">
              <li className="list-group-item">
                <a href="index.html"><i className="fa fa-fw fa-dashboard"></i> Dashboard</a>
              </li>
              <li className="list-group-item">
                <a href="charts.html"><i className="fa fa-fw fa-bar-chart-o"></i> Charts</a>
              </li>
              <li className="list-group-item">
                <a href="tables.html"><i className="fa fa-fw fa-table"></i> Tables</a>
              </li>
              <li className="list-group-item">
                <a href="forms.html"><i className="fa fa-fw fa-edit"></i> Forms</a>
              </li>
              <li className="list-group-item">
                <a href="bootstrap-elements.html"><i className="fa fa-fw fa-desktop"></i> Bootstrap Elements</a>
              </li>
              <li className="list-group-item">
                <a href="bootstrap-grid.html"><i className="fa fa-fw fa-wrench"></i> Bootstrap Grid</a>
              </li>
              <li className="list-group-item">
                <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v"></i> Dropdown <i className="fa fa-fw fa-caret-down"></i></a>
                <ul id="demo" className="list-group collapse">
                  <li className="list-group-item">
                    <a href="javascript:;">Dropdown Item</a>
                  </li>
                  <li className="list-group-item">
                    <a href="javascript:;">Dropdown Item</a>
                  </li>
                </ul>
              </li>
              <li className="list-group-item">
                <a href="blank-page.html"><i className="fa fa-fw fa-file"></i> Blank Page</a>
              </li>
              <li className="list-group-item">
                <a href="index-rtl.html"><i className="fa fa-fw fa-dashboard"></i> RTL Dashboard</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
