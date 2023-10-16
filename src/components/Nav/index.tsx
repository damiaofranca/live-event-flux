import {
	Button,
	Menu,
	MenuItem,
	MenuList,
	MenuPopover,
	MenuTrigger,
	tokens,
} from "@fluentui/react-components";
import { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "..";
import {
	Settings24Filled,
	DarkTheme20Filled,
	People20Filled,
	SignOut20Filled,
} from "@fluentui/react-icons";
import { useStyles } from "./styles";
import { useAuth, useTheme } from "@/hooks";
import { decodeHash } from "@/utils/script";

interface MenuItem {
	key: string;
	label: string;
}

interface INav {}

export const Nav: FC<INav> = () => {
	const styles = useStyles();
	const location = useLocation();
	const navigate = useNavigate();

	const user = decodeHash();
	const { onSignOut } = useAuth();
	const { theme, onChangeTheme } = useTheme();
	const [userEmail] = useState<string>(user ? user.email : "");

	const onNavigateToAccount = () => {
		navigate("/account");
	};

	const paths: MenuItem[] = [
		{
			key: "/app",
			label: `Eventos`,
		},
	];

	return (
		<div className={styles.root}>
			<div className={styles.logo}>
				<Logo height={34} />
			</div>
			<div className={styles.containerItems}>
				{paths.map((_path) => (
					<Link
						to={_path.key}
						key={_path.key}
						className={`${styles.linkItem} ${
							location.pathname === _path.key ? "current" : ""
						}`}
						style={{
							color:
								location.pathname === _path.key
									? tokens.colorNeutralForegroundInvertedLink
									: tokens.colorNeutralForeground2Link,
						}}
					>
						{_path.label}
					</Link>
				))}
			</div>

			<div>
				<Menu>
					<MenuTrigger disableButtonEnhancement>
						<Button
							title="Configurações"
							iconPosition="after"
							appearance="transparent"
							icon={<Settings24Filled />}
						>
							{userEmail}
						</Button>
					</MenuTrigger>

					<MenuPopover>
						<MenuList>
							<MenuItem onClick={onNavigateToAccount}>
								<div className={styles.menuItem}>
									<div className={styles.menuItemIcon}>
										<People20Filled />
									</div>
									Perfil
								</div>
							</MenuItem>
							<MenuItem onClick={onChangeTheme} className={styles.menuItem}>
								<div className={styles.menuItem}>
									<div className={styles.menuItemIcon}>
										<DarkTheme20Filled />
									</div>
									{theme === "light" ? "Claro" : "Escuro"}
								</div>
							</MenuItem>
							<MenuItem className={styles.menuItem} onClick={onSignOut}>
								<div className={styles.menuItem}>
									<div className={styles.menuItemIcon}>
										<SignOut20Filled />
									</div>
									Sair
								</div>
							</MenuItem>
						</MenuList>
					</MenuPopover>
				</Menu>
			</div>
		</div>
	);
};
