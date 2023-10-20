import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Menu,
	Button,
	MenuItem,
	MenuList,
	MenuPopover,
	MenuTrigger,
} from "@fluentui/react-components";
import {
	People20Filled,
	SignOut20Filled,
	Settings24Filled,
	DarkTheme20Filled,
} from "@fluentui/react-icons";

import { Logo } from "..";
import { useAuth, useTheme } from "@/hooks";
import { decodeHash } from "@/utils/script";

import { useStyles } from "./styles";

interface MenuItem {
	key: string;
	label: string;
}

interface INav {}

export const Nav: FC<INav> = () => {
	const styles = useStyles();
	const navigate = useNavigate();

	const user = decodeHash();
	const { onSignOut } = useAuth();
	const { theme, onChangeTheme } = useTheme();
	const [userEmail] = useState<string>(user ? user.email : "");

	const onNavigateToAccount = () => {
		navigate("/account");
	};

	const onNavigateToDashboard = () => {
		navigate(`/app`);
	};

	// const paths: MenuItem[] = [
	// 	{
	// 		key: "/app",
	// 		label: `Eventos`,
	// 	},
	// ];

	return (
		<div className={styles.root}>
			<div className={styles.logo}>
				<Logo
					onClick={onNavigateToDashboard}
					style={{
						height: "34px",
						cursor: "pointer",
						pointerEvents: "initial",
					}}
				/>
			</div>
			{/* <div className={styles.containerItems}>
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
			</div> */}

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
