import F1 from '../../assets/images/f1.png'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'  
//npm i @heroicons/react

const features = [
    {
        name: 'Push to deploy.',
        description:
        'Push to deploy with Netlify. No more configuring or paying for third-party services.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'SSL certificates are included with every site. No more configuring or paying for third-party services.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Database backups are included with every site. No more configuring or paying for third-party services.',
        icon: ServerIcon,
    },
]

const Feature1 = () => {
    return (
    <div>  
        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                    <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Leave the duct tape at home</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Gettig started with Cypress is a breeze simply npm install Cypress. No dependencies to install, no browsers to download. It just works.
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                            <feature.icon className="absolute top-1 left-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                            {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
                <img
                    src={F1}
                    alt="Product screenshot"
                    className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width={2432}
                    height={1442}
                />
                </div>
            </div>
        </div>        
    </div>    
    )
}

export default Feature1
