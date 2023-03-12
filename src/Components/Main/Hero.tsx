import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
const Hero : React.FC = () => {
    const images : string[] = ['hero', 'hero1', 'hero2', 'hero3']
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile : boolean = useMediaQuery('(max-width: 600px)')
    useEffect(() => {
            const timeoutInterval = setInterval(() => {
                    setCurrentIndex((currentIndex + 1) % images.length);
            },3000)

            return () => clearInterval(timeoutInterval)
    },[currentIndex])
    return (
        <Box className='hero' sx={{backgroundImage: `url(/assets/img/hero/${images[currentIndex]}.jpeg)`}}>
                <Container maxWidth={'lg'} >
                    <Box sx={{display: 'flex', flexDirection: 'column', color: '#fff', gap:4, maxWidth:600}}>
                    <Typography variant='h2' sx={{marginTop: 20}}>
                    On A Mission To Go Beyond Sight
                    </Typography>
                    <Typography variant='h6' sx={{fontWeight: 300}}>
                    Eyecan – An App that makes it easier for visually challenged people to go with their everyday tasks.
                    </Typography>

                    <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                    <Button sx={{bgcolor: '#000', borderRadius: '2%'}} fullWidth={true}  className={'buttonClass'} centerRipple={true} size={'large'} startIcon={<SportsEsportsIcon/>} variant={'contained'}>
                                Download on Playstore
                            </Button>

                            <Button  className={'outlinedButtonClass'} fullWidth={true}  sx={{color:"#fff" }} centerRipple={true} size={'large'} startIcon={<PlayCircleFilledWhiteIcon/>} variant={'outlined'}>
                                See What users say
                            </Button>
                    </Stack>
                    </Box>

                </Container>
        </Box>
    )

}

export default Hero;