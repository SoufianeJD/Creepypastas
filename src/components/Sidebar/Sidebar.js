import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="stories" onClick={toggle}>
          Creepypasta
          </SidebarLink>
          <SidebarLink to="publishone" onClick={toggle}>
          Publish one
          </SidebarLink>

        </SidebarMenu>

      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;