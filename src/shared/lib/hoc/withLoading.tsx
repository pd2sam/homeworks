import type { ComponentType } from 'react';

interface WithLoadingProps {
    isLoading: boolean;
}

const withLoading = <P extends object>(Component: ComponentType<P>) => {
    const WithLoadingComponent = (props: P & WithLoadingProps) => {
        const { isLoading, ...restProps } = props;

        if (isLoading) {
            return (
                <div className="loading-container">
                    <div className="loading-spinner">Загрузка...</div>
                </div>
            );
        }

        return <Component {...(restProps as P)} />;
    };

    WithLoadingComponent.displayName = `withLoading(${Component.displayName || Component.name || 'Component'})`;

    return WithLoadingComponent;
};

export default withLoading;

