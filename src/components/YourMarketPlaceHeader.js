import React from 'react';

export default class YourMarketPlaceHeader extends React.Component {
  constructor(props) {
    super(props);

  }
  
  render() {

    return (
      <div id="wrapper">
        <nav className="navbar navbar-dark bg-inverse navbar-fixed-top">
          <div className="navbar-header">
            <button className="navbar-toggler hidden-sm-up pull-sm-right" type="button" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              &#9776;
                </button>
            <a className="navbar-brand" href="index.html">Your Market Place DashBoard</a>
          </div>
          <ul className="nav navbar-nav top-nav navbar-right pull-xs-right">
            <li className="dropdown nav-item">
              <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"><i className="fa fa-user"></i> Login<b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <form className="form" role="form" method="post" action="login" accept-charset="UTF-8" id="login-nav">
                    <div className="form-group">
                      <label className="sr-only" for="exampleInputEmail2">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                    </div>
                    <div className="form-group">
                      <label className="sr-only" for="exampleInputPassword2">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                    </div>
                  </form>
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

        <div id="page-wrapper">
          <div className="container-fluid">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
