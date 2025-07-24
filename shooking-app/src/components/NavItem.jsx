import "./NavItem.css";

const NavItem = ({ icon, badgeContent, max = 99, onClick }) => {
  return (
    <div className="NavItem" role="button" tabIndex={0} onClick={onClick}>
      {icon}
      {badgeContent > 0 && (
        <span className="badge">
          {badgeContent > max ? `${max}+` : badgeContent}
        </span>
      )}
    </div>
  );
};

export default NavItem;
