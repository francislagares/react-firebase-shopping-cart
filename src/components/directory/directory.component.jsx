import React, { Component } from 'react';
import MenuItem from '../menu-items/menu-item.component';
import './directory.styles.scss';
import SECTIONS_DATA from './sections.data';

class Directory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sections: SECTIONS_DATA
    }
  }

  render() {
    return(
      <div className='directory-menu'>
        {
          this.state.sections.map(({ id, ...moreSectionProps }) => 
            <MenuItem key={id} {...moreSectionProps} />
          )
        }
      </div>
    )
  }
}

export default Directory;