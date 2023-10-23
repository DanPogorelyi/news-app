const interfaceConst = 'interface';

const getComponentTemplate = (componentName) => `import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/libs';

import cls from './${componentName}.module.scss';

${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.${componentName}, {}, [className])}>
            ${componentName}
        </div>
    );
});

${componentName}.displayName = '${componentName}';
`;

module.exports = getComponentTemplate;
