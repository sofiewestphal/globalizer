import React from 'react';

class Container extends React.Component {
  state = {
    showDropdown: false,
  }

  toggleDropdown = () =>
    this.setState({
      showDropdown: !this.state.showDropdown,
    });

  render() {
    const { showDropdown } = this.state;
    return (
      <MainMenu
        {...{ showDropdown }}
        onClick={this.toggleDropdown}
      />
    );
  }
}


export default Container;
