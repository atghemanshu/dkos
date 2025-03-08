import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from './MainCard';

// ============================|| ROUND ICON CARD ||============================ //

const RoundIconCard = ({ primary, secondary, content, iconPrimary, color, bgcolor }) => {
    const IconPrimary = iconPrimary;
    const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;

    return (
        <MainCard>
            <Grid container alignItems="center" spacing={0} justifyContent="space-between">
                <Grid item>
                    <Stack spacing={1}>
                        <Typography variant="h5" color="inherit">
                            {primary}
                        </Typography>
                        <Typography variant="h3">{secondary}</Typography>
                        <Typography variant="subtitle2" color="inherit">
                            {content}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item>
                    <IconButton sx={{ bgcolor, color, '& .MuiSvgIcon-root': { fontSize: '1.5rem' } }} size="large" aria-label="theme icon">
                        {primaryIcon}
                    </IconButton>
                </Grid>
            </Grid>
        </MainCard>
    );
};

RoundIconCard.propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
    content: PropTypes.string,
    iconPrimary: PropTypes.object,
    color: PropTypes.string,
    bgcolor: PropTypes.string
};

export default RoundIconCard;
