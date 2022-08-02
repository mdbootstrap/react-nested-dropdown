import React from 'react';
import './navbarDropdownLeft.css';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
} from 'mdb-react-ui-kit';

export default function NavbarDropdownLeft() {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem className="ms-auto">
            <MDBDropdown>
              <MDBDropdownToggle tag='a' className='nav-link'>
                Dropdown Link
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">Action</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">Another action</MDBDropdownLink>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <MDBDropdownLink href="#">Submenu &raquo;</MDBDropdownLink>
                  <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#">Submenu item 1</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#">Submenu item 2</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#">Submenu item 3 &raquo;</MDBDropdownLink>
                      <ul className="dropdown-menu dropdown-submenu dropdown-submenu-left">
                        <MDBDropdownItem>
                          <MDBDropdownLink href="#">Multi level 1</MDBDropdownLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBDropdownLink href="#">Multi level 2</MDBDropdownLink>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#">Submenu item 4</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink href="#">Submenu item 5</MDBDropdownLink>
                    </MDBDropdownItem>
                  </ul>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}