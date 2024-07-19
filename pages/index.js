import { Statistic, Card, Row, Col} from 'antd'
import { useSelector, useDispatch } from 'react-redux';

// private function
function _formatter(value, decimal, unit) {
  if (value === 0) {
      return '0 ' + unit;
  } else {
      var si = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "k" },
          { value: 1e6, symbol: "M" },
          { value: 1e9, symbol: "G" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "P" },
          { value: 1e18, symbol: "E" },
          { value: 1e21, symbol: "Z" },
          { value: 1e24, symbol: "Y" },
      ];
      for (var i = si.length - 1; i > 0; i--) {
          if (value >= si[i].value) {
              break;
          }
      }
      return (value / si[i].value).toFixed(decimal).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + ' ' + si[i].symbol + unit;
  }
}

export default function () {
    const app = useSelector(state => state.app)
  return (
    <>
      <div style={
        { marginBottom: '20px' }
      }>
        <Row style={
          { display: 'flex', justifyContent: 'space-around' }
        }>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="connectedMiners"
                value={app[0].poolStats.connectedMiners || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="poolHashrate"
                value={_formatter(app[0].poolStats.poolHashrate || 0, 2, 'H/s')}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="poolFeePercent"
                value={app[0].poolFeePercent || 0, '1 %'}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="totalPaid"
                value={app[0].totalPaid || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="totalBlocks"
                value={app[0].totalBlocks || 0}
                valueStyle={{ color: '#cf1322' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="poolEffort"
                value={app[0].poolEffort || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          </Row>
          <Row style={
          { display: 'flex', justifyContent: 'space-around' }
        }>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="networkHashrate"
                value={_formatter(app[0].networkStats.networkHashrate || 0, 2, 'H/s')}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="networkDifficulty"
                value={_formatter(app[0].networkStats.networkDifficulty || 0, 2, 'H/s')}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          </Row>
          <Row style={
          { display: 'flex', justifyContent: 'space-around' }
        }>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="minimumPayment"
                value={app[0].paymentProcessing.minimumPayment || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="payoutScheme"
                value={app[0].paymentProcessing.payoutScheme || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="coin"
                value={app[0].coin.name || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
          <Col style={
            { flex: 1 }
          } >
            <Card>
              <Statistic
                title="algorithm"
                value={app[0].coin.algorithm || 0}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}