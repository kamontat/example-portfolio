import loader from './loader'

const data = loader('information')

const EmptyString = (val) => optional(val, '')
const UnknownString = (val) => optional(val, 'unknown')
const Zero = (val) => optional(val, 0)

const optional = (val, def) => {
  const R = require('ramda')
  return R.defaultTo(def, val)
}

// name decode
const _name = data['fullname'].split(' ')
if (_name.length === 2) {
  data.name = _name[0]
  data.surname = _name[1]
} else if (_name.length === 3) {
  data.name = _name[0]
  data.middlename = _name[1]
  data.surname = _name[2]
}

// raw tel number
data['contact']['raw_tel'] = data['contact']['tel'].replace(/-/g, '')

// social link
data['contact']['social']['facebook'] = `https://www.facebook.com/${data['contact']['social']['facebook_id']}`
data['contact']['social']['twitter'] = `https://www.twitter.com/${data['contact']['social']['twitter_id']}`
data['contact']['social']['github'] = `https://www.github.com/${data['contact']['social']['github_id']}`
data['contact']['social']['linkedin'] = `https://www.linkedin.com/in/${data['contact']['social']['linkedin_id']}`

// optional values
data['expected_salary'] = Zero(data['expected_salary'])
data['religion'] = EmptyString(data['religion'])
data['sex'] = UnknownString(data['sex'])

export default data
