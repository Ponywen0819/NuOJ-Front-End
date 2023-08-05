import { 
    Box,
    Container,
    Stack,
    Flex,
    Image,
    Link
} from '@/components/chakra';
import { User } from '@/components/navbar/user';
import { NavLink } from '@/components/navbar/link';
import { Options } from '@/components/navbar/option';
import NextLink from 'next/link';
import logo from '@/public/logo-white.svg';


export const Navbar = ()=>{
    return(
        <Box
            as='nav'
            w={'100%'}
        >
            <Container
                display={'flex'}
                height={16}
                maxW={'container.xl'}
            >  
                <Flex align={'center'}>
                    <Link as={NextLink} href='/'>
                        <Image alt='logo' height={12} src={logo.src}/>
                    </Link>
                </Flex>
                <Flex 
                    display={{base: 'none', lg: 'flex'}}
                    direction={'row'} 
                    align={'center'} 
                    flex={1} 
                    marginLeft={12}
                >
                    <Stack 
                        direction={'row'}
                        align={'center'}
                        gap={10}
                    >
                        <NavLink href='/problem/list'>問題</NavLink>
                        <NavLink href='/about'>關於</NavLink>
                    </Stack>
                    <Box flex={1}>
                        <User/>
                    </Box>
                </Flex>         
                <Flex
                    display={{base: 'flex', lg: 'none'}}
                    flex={1}
                    align={'center'}
                    justify={'end'}
                >
                    <Options/>
                </Flex>
            </Container>
        </Box>
    )
}


