interface NavLinkProps {
    href: string;
    label: string;
    active: boolean;
    onNavigate: () => void;
}

const NavLink = ({ href, label, active, onNavigate }: NavLinkProps) => {
    return (
        <a href={href} onClick={onNavigate} className={[
            'pb-2 border-b-2 border-transparent transition-all duration-500 ease-in-out',
            active ? 'text-accent hover:border-accent' : 'text-light hover:text-accent hover:border-accent'
        ].join(' ')} aria-current={active ? 'page' : undefined}>
            {label}
        </a>
    );
};

export default NavLink;
