import { Variant } from "@mui/material/styles/createTypography";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";


type PageHeaderProps = {
    headingText: string;
    headingVariant?: Variant;
    children?: React.ReactNode | React.ReactNode[];
};

const PageHeader = (props: PageHeaderProps) => {
    const { headingText, children = null, headingVariant = "h3" } = props;

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mb={4}
        >
            <Typography variant={headingVariant} color="primary">{headingText}</Typography>

            {children}
        </Stack>
    );
};

export default PageHeader;
