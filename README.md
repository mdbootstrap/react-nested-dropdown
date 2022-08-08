Nested dropdowns built with React Bootstrap 5. Tutorial & templates for multilevel navbar dropdowns menu, activated on hover or on click & much more

Check out [React Profiles Documentation](https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/) for detailed instructions & even more examples.

## Basic example

![React Nested Dropdown](/assets/basic.png)

```js
import React from 'react';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink, MDBContainer } from 'mdb-react-ui-kit';

export default function Basic() {
  return (
    <MDBContainer className="d-flex justify-content-center mt-5 basic">
      <MDBDropdown>
        <MDBDropdownToggle>Dropdown button</MDBDropdownToggle>
        <MDBDropdownMenu>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Action</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Another action</MDBDropdownLink>
          </MDBDropdownItem>
          <MDBDropdownItem>
            <MDBDropdownLink href="#">Submenu &raquo;</MDBDropdownLink>
            <ul className="dropdown-menu dropdown-submenu">
              <MDBDropdownItem>
                <MDBDropdownLink href="#">Submenu item 1</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#">Submenu item 2</MDBDropdownLink>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBDropdownLink href="#">Submenu item 3 &raquo;</MDBDropdownLink>
                <ul className="dropdown-menu dropdown-submenu">
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
    </MDBContainer>
  );
}
```

```css
.dropdown-menu li {
  position: relative;
}
.dropdown-menu .dropdown-submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: -7px;
}
.dropdown-menu .dropdown-submenu-left {
  right: 100%;
  left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
  display: block;
}
```

## How to use?

1. Download MDB React - free UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More examples

[React Nested Dropdown navbar:
![React Nested Dropdown](/assets/right.png)](https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/#section-navbar-dropdown)

[React Nested Dropdown navbar left:
![React Nested Dropdown](/assets/left.png)](https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/#section-navbar-dropdown-left)

[React Nested Dropdown on hover:
![React Nested Dropdown](/assets/hover.png)](https://mdbootstrap.com/docs/react/extended/dropdown-multilevel/#section-button-dropdown-on-hover)

___

## More React documentation

<ul>
<li><a href="https://mdbootstrap.com/docs/react/extended/mega-menu/">React mega-menu</a></li>
<li><a href="https://mdbootstrap.com/docs/react/extended/multiselect/">React multiselect</a></li>
<li><a href="https://mdbootstrap.com/docs/react/utilities/spacing/">React spacing</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/dropdowns/">React dropdowns</a></li>
<li><a href="https://mdbootstrap.com/docs/react/navigation/navbar/">React navbar</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/buttons/">React buttons</a></li>
</ul>
