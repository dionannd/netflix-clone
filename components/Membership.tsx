import React from 'react'
import useAuth from '../hooks/useAuth'
import Loader from './Loader'

const Membership: React.FC = () => {
  const { user } = useAuth()
  const [isBillingLoading, setBillingLoading] = React.useState<boolean>(false)

  return (
    <div className="grid grid-cols-1 px-4 mt-6 border gap-x-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
      <div className="py-4 space-y-2">
        <h4 className="text-lg text-[gray]">Membership & Billing</h4>
        <button
          disabled={isBillingLoading}
          className="w-3/5 h-10 py-2 text-sm font-medium text-black bg-gray-300 shadow-md whitespace-nowarp hover:bg-gray-200 md:w-4/5"
        >
          {isBillingLoading ? (
            <Loader color="dark:fill-[#e50914]" />
          ) : (
            'Cancel Membership'
          )}
        </button>
      </div>

      <div className="col-span-3">
        <div className="flex flex-col justify-between py-4 border-b border-white/10 md:flex-row">
          <div>
            <p className="font-medium">email@email.com</p>
            <p className="text-[gray]">Password: ********</p>
          </div>
          <div className="md:text-right">
            <p className="membership-link">Change email</p>
            <p className="membership-link">Change password</p>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-4 pb-4 md:flex-row md:pb-0">
          <div>
            <p>Your membership will end on </p>
          </div>
          <div className="md:text-right">
            <p className="membership-link">Manage payment info</p>
            <p className="membership-link">Add backup payment method</p>
            <p className="membership-link">Billing Details</p>
            <p className="membership-link">Change billing day</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Membership
