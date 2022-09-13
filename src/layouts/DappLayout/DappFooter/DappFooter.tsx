import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { FlexDivCentered, FlexDivColumnCentered, FlexDivRowCentered } from 'styles/common';
import { ReactComponent as ThalesLogo } from 'assets/images/thales-logo.svg';
import { LINKS } from 'constants/links';

const DappFooter: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Link target="_blank" rel="noreferrer" href={LINKS.Thales}>
            <Container>
                {t('common.built-on')}
                <StyledLogo />
            </Container>
            <LinksContainer>
                <Link target="_blank" rel="noreferrer" href={LINKS.Footer.Medium}>
                    <LinkContent>
                        <MediumIcon />
                        <LinkText>{t('footer.medium')}</LinkText>
                    </LinkContent>
                </Link>
                <Link target="_blank" rel="noreferrer" href={LINKS.Footer.Twitter}>
                    <LinkContent>
                        <TwitterIcon />
                        <LinkText>{t('footer.twitter')}</LinkText>
                    </LinkContent>
                </Link>
                <Link target="_blank" rel="noreferrer" href={LINKS.Footer.Discord}>
                    <LinkContent>
                        <DiscordIcon />
                        <LinkText>{t('footer.discord')}</LinkText>
                    </LinkContent>
                </Link>
                <Link target="_blank" rel="noreferrer" href={LINKS.Footer.Docs}>
                    <LinkContent>
                        <DocsIcon />
                        <LinkText>{t('footer.docs')}</LinkText>
                    </LinkContent>
                </Link>
                <Link target="_blank" rel="noreferrer" href={LINKS.Footer.Tutorial}>
                    <LinkContent>
                        <YoutubeIcon />
                        <LinkText>{t('footer.tutorial')}</LinkText>
                    </LinkContent>
                </Link>
                <Link target="_blank" rel="noreferrer" href={LINKS.Footer.GitHub}>
                    <LinkContent>
                        <GithubIcon />
                        <LinkText>{t('footer.github')}</LinkText>
                    </LinkContent>
                </Link>
            </LinksContainer>
        </Link>
    );
};

const Link = styled.a``;

const Container = styled(FlexDivCentered)`
    margin-top: 30px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 102.6%;
    letter-spacing: 0.035em;
    color: ${(props) => props.theme.textColor.secondary};
    a {
        color: ${(props) => props.theme.textColor.secondary};
    }
`;

const StyledLogo = styled(ThalesLogo)`
    margin-left: 6px;
    margin-bottom: -5px;
    fill: ${(props) => props.theme.textColor.secondary};
    height: 24px;
`;

const LinksContainer = styled(FlexDivRowCentered)`
    margin-top: 15px;
    color: ${(props) => props.theme.textColor.secondary};
    font-size: 25px;
    flex-wrap: wrap;
    justify-content: center;
    a {
        :not(:last-child) {
            margin-right: 40px;
            @media (max-width: 500px) {
                margin-left: 10px;
                margin-right: 10px;
            }
        }
    }
`;

const LinkContent = styled(FlexDivColumnCentered)`
    align-items: center;
`;

const LinkText = styled(FlexDivCentered)`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: ${(props) => props.theme.textColor.secondary};
`;

const TwitterIcon = styled.i`
    color: ${(props) => props.theme.textColor.secondary};
    &:before {
        font-family: ExoticIcons !important;
        content: '\\005C';
    }
`;

const DiscordIcon = styled.i`
    color: ${(props) => props.theme.textColor.secondary};
    &:before {
        font-family: ExoticIcons !important;
        content: '\\005A';
    }
`;

const DocsIcon = styled.i`
    color: ${(props) => props.theme.textColor.secondary};
    &:before {
        font-family: ExoticIcons !important;
        content: '\\0059';
    }
`;

const YoutubeIcon = styled.i`
    color: ${(props) => props.theme.textColor.secondary};
    &:before {
        font-family: ExoticIcons !important;
        content: '\\005B';
    }
`;

const MediumIcon = styled.i`
    color: ${(props) => props.theme.textColor.secondary};
    &:before {
        font-family: ExoticIcons !important;
        content: '\\0056';
    }
`;

const GithubIcon = styled.i`
    color: ${(props) => props.theme.textColor.secondary};
    &:before {
        font-family: ExoticIcons !important;
        content: '\\0057';
    }
`;

export default DappFooter;
